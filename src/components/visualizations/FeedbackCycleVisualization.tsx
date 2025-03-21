import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface FeedbackNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  description: string;
  category: 'genetico' | 'epigenetico' | 'microbiano' | 'fisiopatologico';
}

export interface FeedbackLink extends d3.SimulationLinkDatum<FeedbackNode> {
  source: string;
  target: string;
  description: string;
  strength: 'weak' | 'medium' | 'strong';
}

interface FeedbackCycle {
  id: string;
  name: string;
  description: string;
  nodes: FeedbackNode[];
  links: FeedbackLink[];
}

interface FeedbackCycleVisualizationProps {
  cycle: FeedbackCycle;
  width?: number;
  height?: number;
}

// Colores para las diferentes categorías de nodos
const categoryColors = {
  genetico: '#4299E1',     // Azul
  epigenetico: '#9F7AEA',  // Púrpura
  microbiano: '#48BB78',   // Verde
  fisiopatologico: '#F56565' // Rojo
};

// Colores para las diferentes intensidades de conexiones
const strengthColors = {
  weak: '#CBD5E0',
  medium: '#A0AEC0',
  strong: '#4A5568'
};

const FeedbackCycleVisualization: React.FC<FeedbackCycleVisualizationProps> = ({
  cycle,
  width = 600,
  height = 500
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Limpiar el SVG antes de dibujar
    d3.select(svgRef.current).selectAll('*').remove();

    // Configuración de la visualización
    const svg = d3.select(svgRef.current);
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Crear un grupo principal
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Crear un tooltip para información adicional
    const tooltip = d3.select(tooltipRef.current)
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background-color', 'white')
      .style('border', '1px solid #ddd')
      .style('border-radius', '4px')
      .style('padding', '8px')
      .style('box-shadow', '0 2px 4px rgba(0,0,0,0.1)')
      .style('font-size', '12px')
      .style('max-width', '200px')
      .style('z-index', '10');

    // Preparar datos para D3
    const nodes = cycle.nodes.map(node => ({ ...node, x: undefined, y: undefined }));
    const links = cycle.links.map(link => {
      const sourceNode = nodes.find(n => n.id === link.source);
      const targetNode = nodes.find(n => n.id === link.target);
      return {
        ...link,
        source: sourceNode?.id || '',
        target: targetNode?.id || '',
        strength: link.strength as 'weak' | 'medium' | 'strong'
      };
    });

    // Crear la simulación de fuerzas
    const simulation = d3.forceSimulation<FeedbackNode>(nodes)
      .force('link', d3.forceLink<FeedbackNode, FeedbackLink>(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(innerWidth / 2, innerHeight / 2))
      .force('collision', d3.forceCollide().radius(50));

    // Crear las conexiones
    const link = g.selectAll('.link')
      .data(links)
      .enter()
      .append('g')
      .attr('class', 'link');

    // Líneas de conexión
    const path = link.append('path')
      .attr('stroke', (d: FeedbackLink) => strengthColors[d.strength])
      .attr('stroke-width', (d: FeedbackLink) => d.strength === 'strong' ? 3 : d.strength === 'medium' ? 2 : 1)
      .attr('fill', 'none')
      .attr('marker-end', 'url(#arrowhead)');
    
    // Flechas para las conexiones
    svg.append('defs').append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '-0 -5 10 10')
      .attr('refX', 25)
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('xoverflow', 'visible')
      .append('svg:path')
      .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
      .attr('fill', '#999')
      .style('stroke', 'none');

    // Crear los nodos
    const node = g.selectAll('.node')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(d3.drag<SVGGElement, any>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
      );

    // Círculos para los nodos
    node.append('circle')
      .attr('r', 25)
      .attr('fill', (d: FeedbackNode) => categoryColors[d.category])
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .on('mouseover', function(event, d: any) {
        tooltip
          .style('visibility', 'visible')
          .html(`<strong>${d.name}</strong><br/>${d.description}`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 10) + 'px');

        d3.select(this).attr('stroke', '#333').attr('stroke-width', 3);
      })
      .on('mouseout', function() {
        tooltip.style('visibility', 'hidden');
        d3.select(this).attr('stroke', '#fff').attr('stroke-width', 2);
      });

    // Etiquetas para los nodos
    node.append('text')
      .attr('dy', 35)
      .attr('text-anchor', 'middle')
      .attr('fill', '#333')
      .attr('font-weight', 'bold')
      .attr('font-size', '10px')
      .text((d: any) => d.name);

    // Actualizar posiciones en cada tick de la simulación
    simulation.on('tick', () => {
      node.attr('transform', (d: any) => `translate(${d.x}, ${d.y})`);

      path.attr('d', (d: any) => {
        const dx = d.target.x - d.source.x;
        const dy = d.target.y - d.source.y;
        const dr = Math.sqrt(dx * dx + dy * dy) * 1.5; // Curva de la línea
        return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
      });
    });

    // Funciones de arrastre para los nodos
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Título de la visualización
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 25)
      .attr('text-anchor', 'middle')
      .attr('font-size', '16px')
      .attr('font-weight', 'bold')
      .text(cycle.name);

    // Leyenda de categorías
    const legend = svg.append('g')
      .attr('transform', `translate(${width - 150}, ${height - 120})`);

    const categories = Object.keys(categoryColors) as Array<keyof typeof categoryColors>;
    categories.forEach((category, i) => {
      const legendItem = legend.append('g')
        .attr('transform', `translate(0, ${i * 25})`);

      legendItem.append('rect')
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', categoryColors[category]);

      legendItem.append('text')
        .attr('x', 20)
        .attr('y', 12)
        .attr('font-size', '12px')
        .text(category.charAt(0).toUpperCase() + category.slice(1));
    });

  }, [cycle, width, height]);

  return (
    <div className="science-diagram">
      <svg ref={svgRef} width={width} height={height}></svg>
      <div ref={tooltipRef}></div>
    </div>
  );
};

export default FeedbackCycleVisualization; 
import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd'

import Task from './Task'

const Container = styled.div`
margin: 8px;
border: 1px solid lightgrey;
background-color: white;
border-radius: 2px;
width: 220px;

display:flex;
flex-direction: column;
`;

const Title = styled.h3`
padding: 8px;`;

const TaskList = styled.div`
padding: 8px;
background-color: ${props => props.isDraggingOver ? 'skyblue' : 'inherit'};
flex-grow: 1;
min-height: 100px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate = (nextProps) => {
    if(nextProps.tasks === this.props.tasks) {
      return false;
    }

    return true;
  }
  render () {
    return this.props.tasks.map((task, index) => (
      <Task Key={task.id} task={task} index={index} />
    ))
  }
}

export default class Column extends Component {
  render() {
    return (
      <Draggable
        draggableId={this.props.column.id}
        index={this.props.index}
      >
        {(provided) =>
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Droppable
              droppableId={this.props.column.id}
              type='task'
            >
              {
                (provided, snapshot) =>
                  <TaskList
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    isDraggingOver={snapshot.isDraggingOver}
                  >
                    <InnerList tasks={this.props.tasks} />
                    {provided.placeholder}
                  </TaskList>
              }
            </Droppable>
          </Container>}
      </Draggable>
    )
  }
}

import styled from "styled-components"

export const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`
export const TodoBoxDiv = styled.div`
    position: realtive;
    display: flex;
    flex-direction: row;
`

export const TaskBox = styled.div`
    width: 300px;
    height: 400px;
    padding: 10px;
    border-right: 1px solid black;
    overflow: overlay;

    &:last-child{
    border: none;
    }
`
export const TaskHeader = styled.h3`
    display: inline;
    width: fit-content;
    padding-right: 5px;
    border-right: 1px solid black;
    text-transform: capitalize;
`

export const TaskCounter = styled.span`
    padding-left: 5px;
    font-size: 18px;
`

export const TaskHeaderDevider = styled.div`
    height: 3px;
    width: 100%;
    margin: 10px 0;
    background-color: ${({ color }) => color}
`

export const Todo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 50px;
    border: 2px solid ${({ color }) => color};
    border-left: 6px solid ${({ color }) => color};
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 8px;

    i{
      color: ${({ color }) => color};
      margin-right: 7px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease
    }

    &:hover i{
        opacity: 1;
        cursor: pointer;
        pointer-events: auto;
        transition: opacity 0.3s ease
    }
`

export const TodoInfoDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 5px;
`

export const TodoIdDiv = styled.div`
    font-weight: bold;
`

export const TodoButtonsDiv = styled.div`
    // border: 1px solid black;
`

export const TodoContent = styled.p`
    margin-top: 5px;
`

export const AddTodoDiv = styled.div`
    margin-top: 10px;

    i{
    cursor: pointer;
    }
`

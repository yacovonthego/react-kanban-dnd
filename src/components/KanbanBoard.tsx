import update from "immutability-helper";
import * as React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import StyledKanbanBoard, {
  CardColumnTitle,
  CardColumnTitleWrapper,
  CardContainer,
  CardDropWrapper,
  StyledKanbanCard,
  StyledKanbanCardTime,
  StyledKanbanCardTitle,
  StyledKanbanColumn
} from './styled/KanbanBoard.styled';
import PlusIcon from '../assets/svg/PlusIcon';

export const INITIAL_COLUMNS_STATE: TCategoryType[] = [
  {
    id: 1,
    columnName: 'New task',
    cardsIds: [5, 6, 7, 8]
  },
  {
    id: 2,
    columnName: 'Scheduled',
    cardsIds: [9, 10, 11]
  },
  {
    id: 3,
    columnName: 'in progress',
    cardsIds: [12, 13, 14]
  },
  {
    id: 4,
    columnName: 'Completed',
    cardsIds: [15, 16, 17, 18, 19]
  }
]

export const INITIAL_CARDS_STATE: { [key: number]: TCardType } = {
  5: {
    id: 5,
    taskName: 'Check Email',
    time: '0:20h',
    color: '#ABE9CE'
  },
  6: {
    id: 6,
    taskName: 'Compare PPC agencies and make a report for Steven',
    time: '3:00h',
    color: '#D8DCFF'
  },
  7: {
    id: 7,
    taskName: 'Meeting with Amanda (PR department)',
    time: '0:30h',
    color: '#ABE9CE'
  },
  8: {
    id: 8,
    taskName: "Get Patrick's approval for homepage new design",
    time: '0:20h',
    color: '#D8DCFF'
  },
  9: {
    id: 9,
    taskName: 'Check Email',
    time: '0:20h',
    color: '#FFDFBA'
  },
  10: {
    id: 10,
    taskName: 'Write a blogpost "7 best strategies for SEO in 2020"',
    time: '5:00h',
    color: '#FEC6B7'
  },
  11: {
    id: 11,
    taskName: 'New Ad copies for Manamaja',
    time: '2:00h',
    color: '#D9E6A2'
  },
  12: {
    id: 12,
    taskName: 'Check Email',
    time: '0:20h',
    color: '#FFDFBA'
  },
  13: {
    id: 13,
    taskName: "Record a video comment about last week's analytics report",
    time: '0:20h',
    color: '#F2BAE1'
  },
  14: {
    id: 14,
    taskName: 'Process all resumes for Content Marketer position',
    time: '1:00h',
    color: '#FFDFBA'
  },
  15: {
    id: 15,
    taskName: 'Check email',
    time: '0:20h',
    color: '#FFDFBA'
  },
  16: {
    id: 16,
    taskName: 'Weekly planning session',
    time: '0:45h',
    color: '#FFDFBA'
  },
  17: {
    id: 17,
    taskName: 'Create 5+ target audiences in Facebook for Samsung ...',
    time: '2:30h',
    color: '#FFDFBA'
  },
  18: {
    id: 18,
    taskName: "Check FB Banner Design and give feedback",
    time: '0:20h',
    color: '#FFDFBA'
  },
  19: {
    id: 19,
    taskName: 'Check email',
    time: '0:20h',
    color: '#FFDFBA'
  },
}

type TCategoryType = {
  id: number
  columnName: string
  cardsIds: number[]
}

type TCardType = {
  id: number
  taskName: string
  time: string
  color: string
}

type TOnCardDropProps = {
  fromColumnId: number
  toColumnId: number
  cardId: number
  cardBeforeId: number | null
}

interface IKanbanCardProps {
  id: number
  text: string
  time: string
  columnId: number
  color: string
  isCompleted: boolean
  onCardDrop: (props: TOnCardDropProps) => void
}

interface IKanbanColumnProps {
  children: React.ReactNode
  columnName: string
  cardsCount: number
  columnId: number
  onCardDrop: (props: TOnCardDropProps) => void
}

interface IKanbanBoardProps {
}

const KanbanCard: React.FunctionComponent<IKanbanCardProps> = ({
  id,
  text,
  time,
  columnId,
  color,
  isCompleted,
  onCardDrop
}) => {
  const [{ isDragging }, drag, dragPreview]: any[] = useDrag(() => ({
    type: "card",
    item: { id, fromColumnId: columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'card',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
    drop(item, monitor) {
      const itemTyped = (item as { id: number, fromColumnId: number });
      onCardDrop({
        fromColumnId: itemTyped.fromColumnId,
        toColumnId: columnId,
        cardId: itemTyped.id,
        cardBeforeId: id
      })
    }
  }))

  return (
    <CardDropWrapper
      ref={drop}
      isCardOver={isOver}
      isCardDragging={isDragging}
      bg={color}
      strike={isCompleted}
    >
      <StyledKanbanCard ref={drag}>
        <StyledKanbanCardTitle>{text}</StyledKanbanCardTitle>
        <StyledKanbanCardTime>{time}</StyledKanbanCardTime>
      </StyledKanbanCard>
    </CardDropWrapper>
  )
}

const KanbanColumn: React.FunctionComponent<IKanbanColumnProps> = ({ children, columnName, cardsCount, onCardDrop, columnId }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'card',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    drop(item, monitor) {
      const itemTyped = (item as { id: number, fromColumnId: number });
      if (!monitor.didDrop()) {
        onCardDrop({
          fromColumnId: itemTyped.fromColumnId,
          toColumnId: columnId,
          cardId: itemTyped.id,
          cardBeforeId: null
        })
      }
    }
  }))

  return (
    <StyledKanbanColumn ref={drop}>
      <CardColumnTitleWrapper>
        <CardColumnTitle>{columnName}<span>{cardsCount}</span></CardColumnTitle>
      </CardColumnTitleWrapper>
      <CardContainer>
        {children}
      </CardContainer>
    </StyledKanbanColumn>
  )
}

const KanbanBoard: React.FunctionComponent<IKanbanBoardProps> = () => {
  const [columns, setColumns] = React.useState(INITIAL_COLUMNS_STATE);
  const [cards, setCards] = React.useState(INITIAL_CARDS_STATE);

  const handleCardDropped = React.useCallback(
    ({ fromColumnId, toColumnId, cardId, cardBeforeId }: TOnCardDropProps) => {
      setColumns(previousColumns => {
        let columnToDeleteFrom = previousColumns.find(column => column.id === fromColumnId);
        let columnToAddTo = previousColumns.find(column => column.id === toColumnId);

        if (columnToDeleteFrom && columnToAddTo) {
          const columnDeleteIndex = previousColumns.indexOf(columnToDeleteFrom)
          const columnAddIndex = previousColumns.indexOf(columnToAddTo)
          const newDeleteCardsIds = [...columnToDeleteFrom.cardsIds]
          const newAddCardsIds = [...columnToAddTo.cardsIds]
          let cardToAddBeforeIndex = newAddCardsIds.findIndex(id => id === cardBeforeId);
          cardToAddBeforeIndex = cardToAddBeforeIndex === -1 ? newAddCardsIds.length : cardToAddBeforeIndex

          if (columnDeleteIndex === columnAddIndex) {
            newAddCardsIds.splice(columnToAddTo.cardsIds.findIndex(id => id === cardId), 1)
            newAddCardsIds.splice(cardToAddBeforeIndex, 0, cardId)

            columnToAddTo = {
              ...columnToAddTo,
              cardsIds: newAddCardsIds
            }
            let newColumns = update(previousColumns, {
              [columnDeleteIndex]: { $set: columnToAddTo }
            })

            return newColumns
          }

          newDeleteCardsIds.splice(columnToDeleteFrom.cardsIds.findIndex(id => id === cardId), 1)
          newAddCardsIds.splice(cardToAddBeforeIndex, 0, cardId)

          columnToDeleteFrom = {
            ...columnToDeleteFrom,
            cardsIds: newDeleteCardsIds
          }
          columnToAddTo = {
            ...columnToAddTo,
            cardsIds: newAddCardsIds
          }
          let newColumns = update(previousColumns, {
            [columnDeleteIndex]: { $set: columnToDeleteFrom }
          })
          newColumns = update(newColumns, {
            [columnAddIndex]: { $set: columnToAddTo }
          })
          return newColumns
        }
        return previousColumns
      })
    },
    [columns, cards]
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <StyledKanbanBoard>
        {columns.map((boardColumn, boardColumnIndex) => (
          <KanbanColumn
            key={boardColumn.id}
            columnName={boardColumn.columnName}
            cardsCount={boardColumn.cardsIds.length}
            columnId={boardColumn.id}
            onCardDrop={handleCardDropped}
          >
            {boardColumn.cardsIds.map((cardId => (
              <KanbanCard
                key={cards[cardId].id}
                id={cards[cardId].id}
                text={cards[cardId].taskName}
                time={cards[cardId].time}
                columnId={boardColumn.id}
                color={boardColumn.columnName === 'Completed' ? '#F0F0F0' : cards[cardId].color}
                onCardDrop={handleCardDropped}
                isCompleted={boardColumn.columnName === 'Completed'}
              />
            )
            ))}
          </KanbanColumn>
        ))}
        <StyledKanbanColumn>
          <CardColumnTitleWrapper>
            <div>
              <i><PlusIcon /></i><span>Create status</span>
            </div>
          </CardColumnTitleWrapper>
        </StyledKanbanColumn>
      </StyledKanbanBoard>
    </DndProvider>
  );
};

export default KanbanBoard;

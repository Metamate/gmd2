# 02 Flappy Bird

- Game Architecture & Design
- Procedural Generation
- State Machines
- Interfaces

## Game Architecture & Design

- [Architecture, Performance, and Games](https://gameprogrammingpatterns.com/architecture-performance-and-games.html)

## State Pattern

[State Pattern](https://gameprogrammingpatterns.com/state.html)

```mermaid
stateDiagram-v2
    [*] --> Ready
    Ready --> Playing : Tap
    Playing --> GameOver : Collision
    GameOver --> Ready : Tap
```

```mermaid
classDiagram
    class Bird {
        -state : State
        +handleInput(Input)
        +update(dt)
    }
    class State {
        <<interface>>
        +handleInput(Input)
        +update(dt)
        +enter()
        +exit()
    }
    class ReadyState {
        +handleInput(Input)
        +update(dt)
    }
    class PlayingState {
        +handleInput(Input)
        +update(dt)
    }
    class GameOverState {
        +handleInput(Input)
        +update(dt)
    }
    
    Bird --> State
    State <|.. ReadyState
    State <|.. PlayingState
    State <|.. GameOverState
```
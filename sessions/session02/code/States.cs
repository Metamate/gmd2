using System;

namespace FlappyBirdStatePattern;

public class ReadyState : IState
{
    public void Enter(Bird bird)
    {
        Console.WriteLine("Bird enters Ready State.");
    }

    public void Exit(Bird bird)
    {
        Console.WriteLine("Bird exits Ready State.");
    }

    public void HandleInput(Bird bird, string input)
    {
        if (input == "Tap")
        {
            Console.WriteLine("Tap detected! Starting game...");
            bird.SetState(new PlayingState());
        }
    }

    public void Update(Bird bird, double dt)
    {
        Console.WriteLine("Ready State: Hovering...");
    }
}

public class PlayingState : IState
{
    public void Enter(Bird bird)
    {
        Console.WriteLine("Bird enters Playing State.");
    }

    public void Exit(Bird bird)
    {
        Console.WriteLine("Bird exits Playing State.");
    }

    public void HandleInput(Bird bird, string input)
    {
        if (input == "Tap")
        {
            Console.WriteLine("Flap!");
        }
        else if (input == "Collision")
        {
            Console.WriteLine("Collision detected! Game Over.");
            bird.SetState(new GameOverState());
        }
    }

    public void Update(Bird bird, double dt)
    {
        Console.WriteLine("Playing State: Flying and applying gravity...");
    }
}

public class GameOverState : IState
{
    public void Enter(Bird bird)
    {
        Console.WriteLine("Bird enters Game Over State.");
    }

    public void Exit(Bird bird)
    {
        Console.WriteLine("Bird exits Game Over State.");
    }

    public void HandleInput(Bird bird, string input)
    {
        if (input == "Tap")
        {
            Console.WriteLine("Tap detected! Restarting game...");
            bird.SetState(new ReadyState());
        }
    }

    public void Update(Bird bird, double dt)
    {
        Console.WriteLine("Game Over State: Waiting for restart...");
    }
}

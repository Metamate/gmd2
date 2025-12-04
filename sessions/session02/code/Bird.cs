using System;

namespace FlappyBirdStatePattern;

public class Bird
{
    private IState _state;

    public Bird()
    {
        // Initial state
        _state = new ReadyState();
        _state.Enter(this);
    }

    public void SetState(IState state)
    {
        _state.Exit(this);
        _state = state;
        _state.Enter(this);
    }

    public void HandleInput(string input)
    {
        _state.HandleInput(this, input);
    }

    public void Update(double dt)
    {
        _state.Update(this, dt);
    }
}

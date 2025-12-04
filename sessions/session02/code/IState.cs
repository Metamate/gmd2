namespace FlappyBirdStatePattern;

public interface IState
{
    void HandleInput(Bird bird, string input);
    void Update(Bird bird, double dt);
    void Enter(Bird bird);
    void Exit(Bird bird);
}

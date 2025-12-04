using System;
using FlappyBirdStatePattern;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Flappy Bird State Pattern Demo");
        Console.WriteLine("------------------------------");

        Bird bird = new Bird();

        // Simulate game loop
        Console.WriteLine("\n--- Game Loop Start ---");
        
        // 1. Initial State (Ready)
        bird.Update(0.16);
        
        // 2. Start Game
        Console.WriteLine("\n> User inputs 'Tap'");
        bird.HandleInput("Tap");
        bird.Update(0.16);

        // 3. Playing
        Console.WriteLine("\n> User inputs 'Tap'");
        bird.HandleInput("Tap");
        bird.Update(0.16);

        // 4. Collision
        Console.WriteLine("\n> User inputs 'Collision'");
        bird.HandleInput("Collision");
        bird.Update(0.16);

        // 5. Game Over
        Console.WriteLine("\n> User inputs 'Tap' (Restart)");
        bird.HandleInput("Tap");
        bird.Update(0.16);
        
        Console.WriteLine("\n--- Game Loop End ---");
    }
}

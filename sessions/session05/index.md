# 05 Super Mario Bros

- Tile Maps
- 2D Animation
- Sprite Art and Palettes (from match3)
- Procedural Level Generation
- Level loading from JSON/XML/Tiled
- Camera
- Platformer Physics
- Basic AI
- Powerups
- Finite State Machines (FSMs)
- State Pattern

```mermaid
classDiagram
    class Student {
        + <<prop>> Id : int
        + <<prop>> Name : string
        + <<prop>> Email : string
        + <<prop>> EnrollmentYear : int
        + <<prop>> IsActive : bool
    }

    class GradeEntry {
        + <<prop>> Id : int
        + <<prop>> Subject : string
        + <<prop>> Score : int
        + <<prop>> DateGiven : DateTime
    }

    class DataAccess {
        - ctx : SchoolContext
        + DataAccess(ctx : SchoolContext)
        + CreateStudentAsync(student : Student) Task
        + AddGradeToStudentAsync(studentId: int, grade : GradeEntry) Task
        + GetStudentsAsync(activeOnly : bool?, enrollmentYear : int?) Task~List~Student~~
        + GetTopStudentsAsync() Task~List~Student~~
    }

    class SchoolContext {
    }

    Student --> "0..*" GradeEntry
    DataAccess --> SchoolContext
```

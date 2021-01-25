# OpModes and Subassemblies

# Opmodes
In EasyOp, **opmodes** are the procedures that you run from the Driver Station. They can include **subassemblies** via the `@Inject` annotation and the dependency injection system. They can include devices from the `hardwareMap` via the `@Device` annotation. They generally extend `com.github.mmm.easyop.Linear`.
- [Creating an OpMode](create-opmode)

# Subassemblies
In EasyOp, **subassemblies** are classes that contain reusable code that is used in other **opmodes** or **subassemblies**. They can also include other **subassemblies** and/or devices. They generally implement `com.github.mmm.easyop.Subassembly`.
- [Creating an Subassembly](create-subassembly)

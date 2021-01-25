# Using a Device
First, as before, make sure the class you want to use a device in derives from either `OpMode` or `Subassembly`. Then, add a `public` member with the `@Device` attribute, like so:
```java
@Device
public DeviceClass deviceName;
```
(replacing `DeviceClass` with the `com.qualcomm.robotcore.hardware` device class, e.g. `DcMotor`. and `deviceName` with the name of the device in the robot controller configuration) \
And it will be automatically loaded from the `hardwareMap` when your opmode is initialized.

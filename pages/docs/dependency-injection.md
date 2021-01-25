# Dependency Injection
## Using a subassembly
First, make sure your subassembly class is imported, e.g.:
```java
import org.firstinspires.ftc.teamcode.subassemblies.*;
```
Then, make sure the class you want to inject the subassembly into is either a derivatve of `com.github.mmm.easyop.OpMode` or `com.github.mmm.easyop.Subassembly` (`Linear` is derived from `OpMode`, so the opmode example above does allow you to use EasyOp's dependency injection system). \
Add a `public` member with the `@Inject` attribute, like so:
```java
@Inject
public SubassemblyClass subassemblyName;
```
(replacing `SubassemblyClass` with the subassembly class name) \
And it will be automatically initialized when your OpMode is initialized.

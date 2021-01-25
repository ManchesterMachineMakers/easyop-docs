# Creating an Opmode
Create a Java file with the following content in the usual `TeamCode/src/main/java/org/firstinspires/ftc/teamcode` directory with the following template content:
```java
package org.firstinspires.ftc.teamcode;

import com.github.mmm.easyop.Linear;
import com.github.mmm.easyop.Inject;
import com.github.mmm.easyop.Device;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.eventloop.opmode.Autonomous;

@Autonomous(name = "OpModeName")
// or
@TeleOp(name = "OpModeName")
public class OpModeName extends Linear {

    public void opInit() {
    }

    public void opBeforeLoop() {
    }

    public void opLoop() {
    }
}
```
And customize to your liking. Remember to pick *one* of either `@Autonomous` or `@TeleOp`!

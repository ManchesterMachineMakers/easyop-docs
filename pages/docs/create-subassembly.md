# Creating a Subassembly
Our team uses a `subassemblies` directory under the main source directory, but you can do whatever you want. \
Create a Java file in whichever directory you choose, with the following template content:
```java
package org.firstinspires.ftc.teamcode.subassemblies;

import com.github.mmm.easyop.Device;
import com.github.mmm.easyop.Inject;
import com.github.mmm.easyop.Subassembly;

public class SubassemblyName implements Subassembly {
    // Implementation goes here
}
```
And customize to your liking. Subassembly classes can have whatever methods and members you want - there are no mandatory interface methods, the `Subassembly` interface just has some `default`-marked methods to help with dependency injection.

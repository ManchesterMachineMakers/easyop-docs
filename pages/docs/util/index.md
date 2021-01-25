# Utilities
Utilities are [mixin interfaces](/docs/concepts/mixin-interface) that provide pluggable functionality. They are located in subpackages of the `com.github.mmm.easyop.util` package. To use a utility, implement its interface in your opmode or subassembly.
## Examples
These examples use the [Logging](logging) utility.
### In an opmode
```java
import com.github.mmm.easyop.*;
import com.github.mmm.easyop.util.logging.*;
...
public class MyOpMode extends Linear implements Logger { ... }
```
### In a subassembly
```java
import com.github.mmm.easyop.*;
import com.github.mmm.easyop.util.logging.*;
...
public class MySubassembly implements Subassembly, Logger { ... }
```

# Logging
**Package**: `com.github.mmm.easyop.util.logging`  
**Main interface**: `Logger`
## Usage
To use the logging utility, follow the main instructions to include it, and then use the following methods to log.

## API
### `void log(LogPriority? priority, String message)`
Logs `message` to the logging system (`logcat` right now, transitioning to the RobotLog system) at the priority specified by `priority`. If `priority` is not specified, it uses the default of `LogPriority.Info`.
#### Example
```java
log("Default priority (info)");
log(LogPriority.Assert, "LogPriority.Assert");
log(LogPriority.Debug, "LogPriority.Debug");
log(LogPriority.Error, "LogPriority.Error");
log(LogPriority.Info, "LogPriority.Info");
log(LogPriority.Verbose, "LogPriority.Verbose");
log(LogPriority.Warn, "LogPriority.Warn");
log("Logging test over");
```
Output:
```
01-01 13:56:38.674  1318  1429 I Logging Test: Default priority (info)
01-01 13:56:38.675  1318  1429 F Logging Test: LogPriority.Assert
01-01 13:56:38.675  1318  1429 D Logging Test: LogPriority.Debug
01-01 13:56:38.676  1318  1429 E Logging Test: LogPriority.Error
01-01 13:56:38.676  1318  1429 I Logging Test: LogPriority.Info
01-01 13:56:38.677  1318  1429 V Logging Test: LogPriority.Verbose
01-01 13:56:38.677  1318  1429 W Logging Test: LogPriority.Warn
01-01 13:56:38.678  1318  1429 I Logging Test: Logging test over
```
### `enum LogPriority`
Priorities for logging.  
**Members**:
- Assert
- Debug
- Error
- Info
- Verbose
- Warn

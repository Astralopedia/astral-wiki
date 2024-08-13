---
sidebar_position: 0
---

# JVM Flags

_This guide can be used for other modpacks as well._

## What Java distribution should I use?

### Choosing a Java version

Minecraft uses 3 Java versions:

- Below 1.16.5, Minecraft uses Java 8.
- 1.16.5 and above, Minecraft uses Java 17.
- 1.20.4 and above, Minecraft uses Java 21.

However, Create: Astral is a 1.18.2 modpack so **Java 17** is enough.

### Too many Java distributions, what should I use?

Most of Java distributions are compatible with Minecraft so you can use any of them. However, some distributions have better performance than others, [GraalVM](https://www.graalvm.org/), for instance.  

I suggest using [GraalVM](https://www.graalvm.org/) because it's some cool features that will be used below.

## Memory allocation

Minimum and maximum (-Xms and -Xmx) memory should be set to the same value, as explained [here](https://dzone.com/articles/benefits-of-setting-initial-and-maximum-memory-siz)  

However, if you are on a low-memory system, and Minecraft takes up almost all your memory, set your minimum memory below your maximum memory to conserve as much as possible.  

Sizes are set in Megabytes (-Xms4096M) or Gigabytes (-Xmx8G)  

> _Allocating too much memory can break garbage collector or just slow down Minecraft, even if you have plenty to spare. Allocating too little can also slow down or break the game. Pay your attention on the Windows Task manager (or your desktop environment's system monitor) when Minecraft is running, and allocate only as much as it needs (which is usually less than 8G). `/sparkc gcmonitor` will tell you if your allocation is too high (the pauses will be too long) or too low (frequent garbage collector with a low memory warning in the notification)._

## Recommended JVM flags

## For client-side (player)

### For [GraalVM](https://www.graalvm.org/) users

```shell
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:AllocatePrefetchStyle=3 -XX:+UseG1GC -XX:MaxGCPauseMillis=37 -XX:+PerfDisableSharedMem -XX:G1HeapRegionSize=16M -XX:G1NewSizePercent=23 -XX:G1ReservePercent=20 -XX:SurvivorRatio=32 -XX:G1MixedGCCountTarget=3 -XX:G1HeapWastePercent=20 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5.0 -XX:G1ConcRSHotCardLimit=16 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:GCTimeRatio=99
```

## For server-side (server)

### Aikar's flags (recommended)

```shell
--add-modules=jdk.incubator.vector -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20
```

# Threads

## Introduction
Threads in Java allow concurrent execution of tasks. The `java.lang.Thread` class and the `Runnable` interface are used to create and manage threads.

## Creating Threads
### Extending the Thread Class
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
    
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

### Implementing the Runnable Interface
```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread is running");
    }
    
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```

## Thread Methods
| Method | Description |
|--------|-------------|
| `start()` | Starts the thread execution |
| `sleep(ms)` | Pauses the thread for a specified time |
| `join()` | Waits for the thread to finish execution |
| `isAlive()` | Checks if the thread is still running |

## Thread Synchronization
Multiple threads accessing shared resources may lead to inconsistency. Synchronization helps prevent this.

```java
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}

public class SyncExample {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });
        
        t1.start();
        t2.start();
        
        t1.join();
        t2.join();
        
        System.out.println("Final count: " + counter.getCount());
    }
}
```

## Thread States
| State | Description |
|--------|-------------|
| NEW | Thread is created but not started |
| RUNNABLE | Thread is running or ready to run |
| BLOCKED | Thread is waiting for a monitor lock |
| WAITING | Thread is waiting indefinitely for another thread |
| TIMED_WAITING | Thread is waiting for a specified time |
| TERMINATED | Thread has finished execution |

## Using Executors for Thread Management
Java provides the `ExecutorService` to manage thread execution efficiently.
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        for (int i = 0; i < 5; i++) {
            executor.execute(() -> System.out.println("Executing thread: " + Thread.currentThread().getName()));
        }
        
        executor.shutdown();
    }
}
```


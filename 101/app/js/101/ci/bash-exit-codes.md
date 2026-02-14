<!-- bash-exit-codes.md -->

### Understanding Exit Codes in Bash and Best CI/CD Practices for Handling Them

Exit codes are a fundamental part of Bash scripting, playing a crucial role in controlling the flow of execution and ensuring that scripts behave as expected. In the context of Continuous Integration/Continuous Deployment (CI/CD), proper handling of exit codes is essential for maintaining robust and reliable automation pipelines. This article will delve into the basics of exit codes in Bash and explore best practices for handling them in CI/CD pipelines.

#### What are Exit Codes in Bash?

In Bash, an exit code is a numeric value returned by a command or script upon its completion. This code indicates the success or failure of the command or script. By convention, an exit code of `0` signifies success, while any non-zero value indicates an error or failure.

##### Basic Usage

Here is a simple example of how exit codes work in Bash:

```bash
#!/bin/bash

# A successful command
echo "Hello, World!"
echo "Exit code: $?"

# A failing command
non_existent_command
echo "Exit code: $?"
```

In this script, `echo "Hello, World!"` executes successfully and returns an exit code of `0`. However, `non_existent_command` fails, returning a non-zero exit code.

#### Checking Exit Codes

To ensure your script behaves correctly based on the success or failure of commands, you can check the exit code using conditional statements:

```bash
#!/bin/bash

if ls /some/directory; then
  echo "Directory exists."
else
  echo "Directory does not exist."
fi
```

In this example, the `ls` command checks for the existence of a directory. If the command succeeds, the script prints "Directory exists."; otherwise, it prints "Directory does not exist."

#### Best Practices for Handling Exit Codes in CI/CD

Proper handling of exit codes is critical in CI/CD pipelines to ensure that each stage of the process completes successfully before moving on to the next. Here are some best practices for handling exit codes in CI/CD:

1. **Fail Fast**: Ensure that your CI/CD pipeline fails as soon as an error is encountered. This minimizes the time spent on running subsequent stages that are likely to fail anyway.

    ```yaml
    stages:
      - stage: Build
        script: ./build.sh
        failFast: true
    ```

2. **Use Descriptive Exit Codes**: Instead of using generic exit codes, use specific exit codes for different types of errors. This helps in quickly identifying the cause of a failure.

    ```bash
    #!/bin/bash

    function validate_input {
      if [[ -z "$1" ]]; then
        echo "Input is required."
        exit 1  # Exit code 1 for missing input
      fi
    }

    function compile_code {
      # Compilation command
      if ! gcc main.c -o main; then
        echo "Compilation failed."
        exit 2  # Exit code 2 for compilation error
      fi
    }

    validate_input "$@"
    compile_code
    ```

3. **Aggregate Results**: In some cases, you may want to run multiple commands and aggregate their results, failing the pipeline if any command fails.

    ```bash
    #!/bin/bash

    errors=0

    ./test1.sh || errors=$((errors + 1))
    ./test2.sh || errors=$((errors + 1))
    ./test3.sh || errors=$((errors + 1))

    if [[ $errors -ne 0 ]]; then
      echo "There were $errors errors."
      exit 1
    fi
    ```

4. **Logging and Debugging**: Ensure that you log detailed information about each step in your pipeline. This helps in diagnosing issues when a failure occurs.

    ```yaml
    stages:
      - stage: Test
        script: 
          - ./run_tests.sh
        always:
          - echo "Test logs:"
          - cat test.log
    ```

5. **Retry Mechanisms**: Implement retry mechanisms for transient errors, such as network issues, to improve the robustness of your pipeline.

    ```yaml
    stages:
      - stage: Deploy
        script:
          - ./deploy.sh
        retry:
          max: 3
          delay: 5
    ```

6. **Clean Up Resources**: Ensure that resources are properly cleaned up after a failure to avoid resource leaks and ensure a clean state for subsequent runs.

    ```bash
    #!/bin/bash

    function cleanup {
      echo "Cleaning up..."
      # Commands to clean up resources
    }

    trap cleanup EXIT

    # Main script
    ./run_pipeline.sh
    ```

#### Conclusion

Handling exit codes effectively is crucial for building reliable Bash scripts and CI/CD pipelines. By adhering to best practices such as failing fast, using descriptive exit codes, aggregating results, logging, implementing retry mechanisms, and cleaning up resources, you can ensure that your automation processes are robust and efficient. These practices not only help in maintaining the health of your pipelines but also in quickly identifying and resolving issues, leading to faster and more reliable software delivery.
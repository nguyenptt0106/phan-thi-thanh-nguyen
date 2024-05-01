import React, {useState} from 'react';
import styles from './Problem1.module.scss';

// Problem: Three ways to sum to `n`

// Solutions:
const sum_to_n_a = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Method 2: Recursion
const sum_to_n_b = (n) => {
  if (n <= 0) {
    return 0;
  }
  return n + sum_to_n_b(n - 1);
};

// Method 3: Gauss formula
const sum_to_n_c = (n) => {
  return (n * (n + 1)) / 2;
};

const Solution = ({title, method, code}) => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.block}>
      <div className={styles.row}>
        <h3>{title}</h3>
        <div className={styles.row}>
              <pre className={styles.code}>
                {`${code}`}
              </pre>
        </div>
        <div className={styles.row}>
          <div>
            <strong>Example:</strong>
          </div>
          <div className={styles.row}>
            <strong>N = </strong> <input
            className={styles.input}
            value={value}
            onChange={(event) => {
              setValue(Number(event.target.value))
            }}/> <span>(Enter a number to calculate)</span>
          </div>
        </div>
        <div className={styles.row}>
          <strong>Result: </strong> {method && method(value)}
        </div>
      </div>
    </div>
  )
}


const Problem1 = () => {
  return (
    <div className={styles.container}>
      <h1>Problem 1: Three ways to sum to "n"</h1>
      <Solution
        title="Method A: For loop"
        code={
        `const sum_to_n_a = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};`
      }
        method={sum_to_n_a}
      />
      <hr className={styles.line}/>
      <Solution
        title="Method B: Recursion"
        code={
        `const sum_to_n_b = (n) => {
  if (n <= 1) {
    return 0;
  }
  // Call itself until n = 0
  return n + sum_to_n_b(n - 1);
};`
      }
        method={sum_to_n_b}
      />
      <hr className={styles.line}/>
      <Solution
        title="Method C: Math formula"
        code={
        `const sum_to_n_c = (n) => {
  return (n * (n + 1)) / 2;
};`
      }
        method={sum_to_n_c}
      />
    </div>
  );
}

export default Problem1;

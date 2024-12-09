The solution involves using optional chaining (`?.`) and nullish coalescing (`??`) operators to safely handle potentially null or undefined values.  Additionally, checking for the existence of data before attempting to render it is crucial.

```javascript
// Solution using optional chaining and nullish coalescing

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('someAPI')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text> 
    </View>
  );
};
```

**Explanation:**

*   **`data?.name`**: The optional chaining operator (`?.`) short-circuits the evaluation if `data` is `null` or `undefined`. If `data` is nullish, it returns `undefined` preventing the error.  Otherwise, it accesses the `name` property.
*   **`?? 'Loading...'`**: The nullish coalescing operator (`??`) provides a default value ('Loading...') if the expression on the left (`data?.name`) is `null` or `undefined`.
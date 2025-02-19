In React Router Dom v6, using the `useNavigate` hook within a component that's conditionally rendered might lead to unexpected behavior. If the component isn't initially rendered (due to a conditional check), calling `useNavigate` within it might throw an error because the hook needs to be in a component that's part of the React Router context.

```javascript
function MyComponent() {
  const navigate = useNavigate();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Simulate an async operation that changes the render condition
    setTimeout(() => setShouldRender(true), 1000);
  }, []);

  if (shouldRender) {
    return (
      <button onClick={() => navigate('/home')}>
        Go Home
      </button>
    );
  } else {
    return <div>Loading...</div>;
  }
}
```
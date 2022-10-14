export const getAllBooks = async () => {
  const response = await fetch("/api2/todos");
  return await response.json();
};

export const createBook = async (data) => {
  const response = await fetch("/api2/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todo: data }),
  });
  return await response.json();
};

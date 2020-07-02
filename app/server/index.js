const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middlware
app.use(cors());
app.use(express.json());

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get our todos

app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");
    res.json(todos.rows);
  } catch (error) {
    console.error(err);
  }
});

// get a single todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleTodo = await pool.query(
      "SELECT * FROM todo WHERE todo_id = $1",
      [id]
    );
    if (singleTodo.rows[0]) {
      res.json(singleTodo.rows[0]);
    } else {
      res.json({ err: "No todos available" });
    }
    console.log(req.params);
  } catch (error) {
    console.error(error);
  }
});

// update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    res.json("todo updated");
  } catch (err) {
    console.error(err);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.status(200).json("Todo was deleted");
  } catch (err) {
    console.error(err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("seerve");
});

document.addEventListener("DOMContentLoaded", () => {

  const tasks = document.querySelectorAll(".sub-task");
  const columns = document.querySelectorAll(".sub-task-column");

  let draggedTask = null;

  // -----------------------------
  // DRAG START
  // -----------------------------
  tasks.forEach(task => {

    task.addEventListener("dragstart", () => {

      draggedTask = task;

      task.classList.add("dragging");

    });

    // -----------------------------
    // DRAG END
    // -----------------------------
    task.addEventListener("dragend", () => {

      task.classList.remove("dragging");

      draggedTask = null;

    });

  });

  // -----------------------------
  // DROP ZONES
  // -----------------------------
  columns.forEach(column => {

    // Permite o DROP
    column.addEventListener("dragover", (e) => {

      e.preventDefault();

      column.classList.add("drag-over");

    });

    // Remove highlight
    column.addEventListener("dragleave", () => {

      column.classList.remove("drag-over");

    });

    // DROP
    column.addEventListener("drop", () => {

      column.classList.remove("drag-over");

      if (draggedTask) {

        column.appendChild(draggedTask);

      }

    });

  });

});

document.addEventListener("DOMContentLoaded", () => {

  const textareas = document.querySelectorAll("textarea");

  textareas.forEach(textarea => {

    // Carrega valor salvo
    textarea.value =
      localStorage.getItem(textarea.id) || "";

    // Salva automaticamente
    textarea.addEventListener("input", () => {

      localStorage.setItem(
        textarea.id,
        textarea.value
      );

    });

  });

});
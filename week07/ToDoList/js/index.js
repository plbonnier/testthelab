/**
 * Todolist
 */

const tasks = [
  { value: "Voter pour Reynald", checked: true },
  { value: "Révision Javascript !", checked: false },
  {
    value: "Répéter 100 fois : Je sais écrire une fonction flèchée !",
    checked: true,
  },
  { value: "Je veux devenir Dev Fullstack :)", checked: false },
];

const app = {
  // Etape 1 : déclarer une méthode init pour la lancer aprés le chargement du DOM
  //root : document.querySelector("#root"),
  init: () => {
    app.root = document.querySelector("#root");
    app.root.textContent = "";
    app.createForm();
    app.createCounter();
    app.updatecounter();
    app.createTasks();
  },

  // Etape 2 : déclarer une méthode qui permet de créer un formuaire dans le DOM

  createForm: () => {
    const form = document.createElement("form");
    form.className = "form";
    const input = document.createElement("input");
    input.className = "form__input";
    input.type = "text";
    input.placeholder = "Ajouter une tâche";
    input.autofocus = true;
    form.appendChild(input);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      tasks.push({
        value: input.value,
        checked: false,
      });
      input.value = "";
      app.init();
    });
    app.root.appendChild(form);
  },

  // Etape 3 : déclarer une méthode create counter qui permet d'afficher le nombres des tâches réalisées

  createCounter: () => {
    app.counter = document.createElement("p");
    app.counter.className = "counter";

    app.root.appendChild(app.counter);
  },

  // Etape 3 :  déclarer une méthode qui permet de mettre à jour le counter

  updatecounter: () => {
    const unchecked = tasks.filter((task, index) => {
      return !task.checked;
    });
    const count = unchecked.length;

    let text = "";

    if (count === 0) {
      text = "Aucune tâche à faire";
    } else if (count === 1) {
      text = "1 tâche en cours";
    } else {
      text = `${count} tâches en cours`;
    }

    app.counter.textContent = text;
  },

  // Etape 4 : déclarer une méthode qui permet de créer la liste des tâches

  createTasks: () => {
    app.tasklist = document.createElement("ul");
    app.tasklist.className = "tasks";

    tasks.forEach((task) => {
      app.generateTask(task);
    });
    app.root.appendChild(app.tasklist);
  },

  generateTask: (taskData) => {
    const task = document.createElement("li");
    task.className = "task";
    if (taskData.checked) {
      task.classList.add("task--done");
    }
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task__checkbox";
    checkbox.style.marginRight = "20px";
    checkbox.style.transform = "scale(1.8)";

    checkbox.checked = taskData.checked;
    checkbox.id = `task-${taskData.value}`;

    checkbox.addEventListener("change", () => {
      taskData.checked = !taskData.checked;
      app.init();
    });

    const label = document.createElement("label");
    label.className = "task__label";
    label.htmlFor = `task-${taskData.value}`;
    label.textContent = taskData.value;
    label.style.fontSize = "17px";
    label.prepend(checkbox);
    task.appendChild(label);

    app.tasklist.appendChild(task);
  },
};

// Ajouter un écouteur sur le document
document.addEventListener("DOMContentLoaded", app.init);

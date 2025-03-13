import { create } from 'zustand'

type Task = {
  id: string
  title: string
}

type TaskStore = {
  tasks: Task[]
  addTask: (task: Task) => void
}

const useTaskStore = create<TaskStore>()((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, task]
  }))
}))

export default useTaskStore
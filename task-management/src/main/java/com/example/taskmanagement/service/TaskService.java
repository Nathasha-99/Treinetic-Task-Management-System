package com.example.taskmanagement.service;

import com.example.taskmanagement.model.Task;
import com.example.taskmanagement.dto.TaskDTO;
import com.example.taskmanagement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List <TaskDTO> getAllTasks(){
        List<Task> tasks = taskRepository.findAll();
        return tasks.stream()
                .map(task -> new TaskDTO(task.getId(),task.getTitle(), task.getDescription(), task.getStatus(), task.getCreatedAt()))
                .collect(Collectors.toList());

    }
    public TaskDTO getTaskById(Long id){
        Task task = taskRepository.findById(id).orElseThrow(()-> new RuntimeException("Task not found"));
        return  new TaskDTO(task.getId(),task.getTitle(), task.getDescription(), task.getStatus(), task.getCreatedAt());

    }

    public TaskDTO createTask(Task task){
        task.setCreatedAt(LocalDateTime.now());
        Task savedTask = taskRepository.save(task);
        return new TaskDTO(savedTask.getId(),savedTask.getTitle(),savedTask.getDescription(), savedTask.getStatus(), savedTask.getCreatedAt());
    }

    public TaskDTO updateTask(Long id, Task taskDetails){
        Task task = taskRepository.findById(id).orElseThrow(()-> new RuntimeException("Task not found"));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setStatus(taskDetails.getStatus());
        Task updatedTask = taskRepository.save(task);
        return new TaskDTO(updatedTask.getId(),updatedTask.getTitle(), updatedTask.getDescription(), updatedTask.getStatus(), updatedTask.getCreatedAt());
    }

    public void  deleteTask(Long id){
        Task task = taskRepository.findById(id).orElseThrow(()-> new RuntimeException("Task not found"));
        taskRepository.delete(task);
    }
}

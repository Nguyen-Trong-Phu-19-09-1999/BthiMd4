package com.example.bthimd4.controller;


import com.example.bthimd4.model.Student;
import com.example.bthimd4.repository.StudentRepository;
import com.example.bthimd4.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("api/students")
public class StudentController {
    @Autowired
    private IStudentService studentService;
    @GetMapping
    public ResponseEntity<Iterable<Student>> showList(){
        return new ResponseEntity<>(studentService.findAll(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        Optional<Student> student = studentService.findById(id);
        if (student.isPresent()){
            return new ResponseEntity<>(student,HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Student student){
        studentService.save(student);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @PostMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Student student ,@PathVariable Long id ){
        Optional<Student> student1 = studentService.findById(id);
        if (student1.isPresent()){
            student.setId(id);
            studentService.save(student);
            return new ResponseEntity<>(HttpStatus.OK);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Student> delete(@PathVariable Long id){
        Optional<Student> student = studentService.findById(id);
        if (student.isPresent()){
            studentService.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @Autowired
    private StudentRepository repository;

    @GetMapping("/sortI")
    public ResponseEntity<Iterable<Student>> sortI(){
        return new ResponseEntity<>(repository.sortIncreasing(), HttpStatus.OK);
    }

    @GetMapping("/sortD")
    public ResponseEntity<Iterable<Student>> sortD(){
        return new ResponseEntity<>(repository.sortDecreasing(),HttpStatus.OK);
    }
}

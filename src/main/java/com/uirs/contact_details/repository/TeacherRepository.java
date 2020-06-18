package com.uirs.contact_details.repository;
import com.uirs.contact_details.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer>{
Teacher getById(int id);
}

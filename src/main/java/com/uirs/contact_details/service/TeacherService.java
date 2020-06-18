package com.uirs.contact_details.service;

import com.uirs.contact_details.model.Teacher;

import java.util.List;

public interface TeacherService {

    void create(Teacher teacher);

    List<Teacher> readAll();

    Teacher read(int id);

    boolean update(Teacher teacher, int id);

    boolean delete(int id);
}
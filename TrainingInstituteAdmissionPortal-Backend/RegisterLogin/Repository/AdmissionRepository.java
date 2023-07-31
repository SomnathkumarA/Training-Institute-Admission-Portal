package com.springapp.RegisterLogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springapp.RegisterLogin.Model.Admission;

public interface AdmissionRepository extends JpaRepository<Admission, Long> {
}

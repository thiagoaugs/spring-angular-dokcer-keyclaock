package br.com.sat.forms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.sat.forms.entity.Pais;

/**
 * @author Thiagoaugs  - 7 de ago de 2021
 *
 */
@Repository
public interface PaisRepository extends JpaRepository<Pais, Long> {
}
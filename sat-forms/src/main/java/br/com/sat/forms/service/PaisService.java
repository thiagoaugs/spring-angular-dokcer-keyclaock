package br.com.sat.forms.service;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.sat.forms.entity.Pais;
import br.com.sat.forms.repository.PaisRepository;

/**
 * @author Thiagoaugs - 7 de ago de 2021
 *
 */
@Service
public class PaisService extends AbstractService<Pais>{

	@Autowired
	PaisRepository paisRepository;

	public List<Pais> getAllPais() {
		return paisRepository.findAll();
	}

	public Pais getPaisById(Long id) {
		return paisRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Cart not found"));
	}

	public Pais insertPais(Pais pais) {
		return paisRepository.save(pais);
	}

	public void deletePais(Long id) {
		paisRepository.deleteById(id);
	}
}
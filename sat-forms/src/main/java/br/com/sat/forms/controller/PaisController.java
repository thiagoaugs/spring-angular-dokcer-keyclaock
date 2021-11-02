package br.com.sat.forms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sat.forms.entity.Pais;
import br.com.sat.forms.service.PaisService;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

/**
 * @author Thiagoaugs - 7 de ago de 2021
 *
 */
@RestController
@RequestMapping("/pais")
@NoArgsConstructor
@Log4j2
public class PaisController {

	@Autowired
	private PaisService paisService;

	@GetMapping("/getAll")
	public ResponseEntity<List<Pais>> getAll() {
		log.info("An INFO Message");
		return new ResponseEntity<List<Pais>>(paisService.getAllPais(), HttpStatus.OK);
	}

	@PostMapping("/")
	public ResponseEntity<Pais> insert(Pais pais) {
		log.info("Inserindo pais: {}", pais.getName());
		return new ResponseEntity<>(paisService.insertPais(pais), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Pais> getById(@PathVariable("id") Long id) {
		log.info("Deletando pais com id: {}", id);
		return new ResponseEntity<>(paisService.getPaisById(id), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		log.info("Deletando pais com id: {}", id);
		Pais pais = paisService.getPaisById(id);

		if (pais == null) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}

		paisService.deletePais(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}

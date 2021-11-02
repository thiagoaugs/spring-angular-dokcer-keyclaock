package br.com.sat.forms.service;

import java.util.Date;

import org.springframework.stereotype.Service;

import br.com.sat.forms.entity.AbstractModel;

@Service
public class AbstractService <Model extends AbstractModel> {

	public Model save(Model model) {
		
		if (model.getId() == null || model.getId() == 0) {
			model.setId(null);
			model.setDtCadastro(new Date());
		} else
			model.setDtAlteracao(new Date());

		return model;
	}

}

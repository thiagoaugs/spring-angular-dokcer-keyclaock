/**
 * 
 */
package br.com.sat.forms.entity;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

/**
 * @author Thiagoaugs - 7 de ago de 2021
 *
 */
@Entity
@Getter
@Setter
@Table(name = "PAIS")
public class Pais extends AbstractModel{

	@NotBlank(message = "Campo obrigatório")
	private String name;

}

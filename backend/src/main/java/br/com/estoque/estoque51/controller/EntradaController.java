package br.com.estoque.estoque51.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.estoque.estoque51.dto.response.MessageResponseDTO;
import br.com.estoque.estoque51.exceptions.EntradaNotFoundException;
import br.com.estoque.estoque51.model.Entrada;
import br.com.estoque.estoque51.service.EntradaService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/entrada")
public class EntradaController {

	@Autowired
	private EntradaService service;
	
	@PostMapping
    public MessageResponseDTO createFornecedor(@RequestBody Entrada entrada) {
        return service.save(entrada);
    }
	
	@GetMapping
	public List<Entrada> listarTodos(){
		return service.findAll();
	}
	
	 @GetMapping("/{id}")
	    public Entrada findById(@PathVariable Integer id)throws EntradaNotFoundException{
	        return service.loadById(id);
	    }
	 
	 @PutMapping("/{id}")
	    public MessageResponseDTO updateById(@PathVariable Integer id, @RequestBody Entrada entrada) throws EntradaNotFoundException{
		 
		 if(entrada.isFinalizado()) {
			return  MessageResponseDTO.createMessageResponse(id, "A atualização da entrada não é permitida, pois o status já esta finalizado");
		 }
	        return service.updateById(entrada);
	    }
	 
	  @DeleteMapping("/{id}")
	    public MessageResponseDTO deleteById(@PathVariable Integer id) throws EntradaNotFoundException{
		  
		  Entrada entradaVerific = service.loadById(id);
		  
		  if(entradaVerific.isFinalizado()) {
				return  MessageResponseDTO.createMessageResponse(id, "Não é permitida deletar esta entrada pois o status já esta finalizado");
			 }
		  
		  return service.delete(entradaVerific.getId());
	    }
}

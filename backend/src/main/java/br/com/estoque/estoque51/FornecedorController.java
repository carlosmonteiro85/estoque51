package br.com.estoque.estoque51;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.estoque.estoque51.dto.response.MessageResponseDTO;
import br.com.estoque.estoque51.exceptions.FornecedorNotFoundException;
import br.com.estoque.estoque51.model.Fornecedor;
import br.com.estoque.estoque51.service.FornecedorService;

@RestController
@RequestMapping("/fornecedor")
public class FornecedorController {

	@Autowired
	private FornecedorService service;
	
	@PostMapping
    public MessageResponseDTO createFornecedor(@RequestBody Fornecedor fornecedor) {
        return service.save(fornecedor);
    }
	
	@GetMapping
	public List<Fornecedor> listarTodos(){
		return service.findAll();
	}
	
	 @GetMapping("/{id}")
	    public Fornecedor findById(@PathVariable Integer id)throws FornecedorNotFoundException{
	        return service.findById(id);
	    }
	 
	 @PutMapping("/{id}")
	    public MessageResponseDTO updateById(@PathVariable Integer id, @RequestBody Fornecedor fornecedor) throws FornecedorNotFoundException{
	        return service.updateById(fornecedor);
	    }
	 
	  @DeleteMapping("/{id}")
	    public MessageResponseDTO deleteById(@PathVariable Integer id) throws FornecedorNotFoundException{
		  return service.delete(id);
	    }
}

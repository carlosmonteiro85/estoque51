package br.com.estoque.estoque51.dto.response;

public class MessageResponseDTO {
	
	private String message;

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public MessageResponseDTO() {
	}
	
	public MessageResponseDTO(String message) {
		this.message = message;
	}

	public static MessageResponseDTO builder() {
		return new MessageResponseDTO();
	}

	public MessageResponseDTO message(String string) {
		MessageResponseDTO messageResponseDTO = new MessageResponseDTO();
		messageResponseDTO.setMessage(string);
		return messageResponseDTO;
	}

}

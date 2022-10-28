import { Form, Button } from 'react-bootstrap';

const NewItem = () =>{
    return(
        
        <Form>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Id"
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="title"
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="description"
                   
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="date"
                   
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="price"
                   
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="category"
                    
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    as="textarea"
                    placeholder="status"
                   
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    type="text"
                    placeholder="Img"
                   
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Product
            </Button>
        </Form>

    )
}

export default NewItem
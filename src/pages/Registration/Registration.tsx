import { Accordion, Button, Form } from "react-bootstrap"

export const Registration: React.FC = ()=>{
  return <>
  Регистрация
  <Form>
    <Accordion>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Шаг 1</Accordion.Header>
      <Accordion.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control type="phone" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Введите номер телефона
          </Form.Text>
        </Form.Group>

        <Button variant="primary">Получить код</Button>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Шаг 2</Accordion.Header>
      <Accordion.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Код подтверждения</Form.Label>
          <Form.Control type="code" placeholder="Введите код из СМС" />
          
        </Form.Group>

        <Button variant="primary">Подтвердить</Button>

      </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header>Шаг 3</Accordion.Header>
      <Accordion.Body>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Фамилия</Form.Label>
        <Form.Control type="text" placeholder="Фамилия" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" placeholder="Имя" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Отчество</Form.Label>
        <Form.Control type="text" placeholder="Отчество" />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Подтвердить пароль</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary">
          Submit
        </Button>
      </Accordion.Body>
    </Accordion.Item>

    </Accordion>

    </Form>
  </>
}
import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import cs from 'classnames'
import styles from './header.module.css'
import { connect } from 'react-redux'


const Main = ({ fetching }) => {

    //storing data

    const [myLi, setMyLi] = useState(fetching.mylist)
    const [rec, setRec] = useState(fetching.recommendations)

    // handling data

    const handleRemove = (val) => {

        setMyLi(myLi.filter(e => e.id !== val.id))
        rec.push(val)

    }

    const handleAdd = (val) => {
        setRec(rec.filter(e => e.id !== val.id))
        myLi.push(val)


    }

    useEffect(() => {
        // console.log("useeffecttt")
    }, [fetching])

    return (
        <div>
            <p className={cs("my-2", "font-weight-bold", "p-3", "text-center", styles.myList)}>My List</p>
            <Container>

                <Row className="justify-content-md-center">

                    {myLi && myLi.map(list =>
                        <Col className="mx-2" xs={6} sm={6} md={2} key={list.id}>
                            <Card style={{ width: '12rem' }} className={cs(styles.cardBox)}>
                                <Card.Img variant="top" className={styles.imagehi} src={list.img} />
                                <div className={styles.middle}>
                                    <Button variant="danger" onClick={() => handleRemove(list)
                                        // () => dispatch(removeItem(list))
                                    }>Remove</Button>
                                </div>
                            </Card>
                        </Col>

                    )
                    }

                </Row>

            </Container>

            <p className={cs("my-2", "p-3", "font-weight-bold", "text-center", styles.myList)}>Recommendations</p>
            <Container>

                <Row className="justify-content-md-center">
                    {
                        rec && rec.map(value =>
                            <Col className="mx-2" xs={6} sm={6} md={2} key={value.id}>
                                <Card style={{ width: '12rem' }} className={cs(styles.cardBox)}>
                                    <Card.Img variant="top" className={styles.imagehi} src={value.img} />
                                    <div className={styles.middle}>
                                        <Button variant="primary" onClick={() => handleAdd(value)
                                            // () => dispatch(addItem(value))
                                        }>Add</Button>
                                    </div>
                                </Card>
                            </Col>

                        )
                    }

                </Row>

            </Container>

        </div>

    )
}
const mapStateToProps = state => ({ fetching: state.getDataReducer.data })
export default connect(mapStateToProps, {})(Main);
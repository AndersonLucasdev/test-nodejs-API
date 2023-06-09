import atividades from '../models/models.js'

const createService = (body) => atividades.create(body)

const findAllService = () => atividades.find()

const findbyIdService = (id) => atividades.findById(id)

const updateService = (
    id,
    descricao
    ) => 
    atividades.findOneAndUpdate(
        {_id: id},
        {descricao
    }, 
    {new: true}
    )

const deleteByID = (id) => atividades.findByIdAndDelete(id)

export default {
    createService,
    findAllService,
    findbyIdService,
    updateService,
    deleteByID
}
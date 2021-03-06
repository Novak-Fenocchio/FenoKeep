const notesCtrl = {};

const Note = require('../models/note');

/* new note */
notesCtrl.renderNoteForm = (req, res)=>
{
    res.render('notes/newNote');
};

notesCtrl.createNewNote = async (req, res)=>
{   
    const {title, description, category} = req.body;
    console.log(req.user.id);
    const newNote = new Note({title: title, description: description, user: req.user.id, category: category});
    await newNote.save();
    res.redirect('/notes'); 
}

/* get all notes */
notesCtrl.renderNotes = async(req, res)=>
{
    const notes = await Note.find({user: req.user.id});
    req.flash('success_msg', 'Note added sucessfuly');
    res.render('notes/all-notes', { notes });
}

/* Edit note */
notesCtrl.renderEditForm = async(req,res)=>
{
    const noteToEdit = await Note.findById(req.params.id);
    if(noteToEdit.user != req.user.id)
    {
        res.redirect('/users/signIn')
    }else{
        res.render('notes/edit-notes', {noteToEdit});
    }
}
notesCtrl.updateNote = async(req,res) =>
{
    console.log(req.body);
    const {title, description, category} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title: title, description: description, category: category})
    req.flash('success_msg', 'Note updated successfuly');
    res.redirect('/notes')
}

/* delete note */
notesCtrl.deleteNote = async (req, res)=>
{
    const noteToDelete = await Note.findById(req.params.id);
    if(noteToDelete.user != req.user.id)
    {
        res.redirect('/users/signIn')
    }else
    {
        await Note.findByIdAndDelete(req.params.id);
        req.flash('success_msg', 'Note removed successfuly');
        res.redirect('/notes')
    }
}

/* Search note */
notesCtrl.searchNote = async(req,res)=>
{
    const keyWord = req.body.keyWordInput;
    const noteSearch = await Note.find({title:  {$regex:keyWord}})
    console.log(keyWord);
    console.log(noteSearch);
    res.render('notes/searched-notes', {noteSearch}); 

}
/*  notesCtrl.renderSearchNote = async(req,res)=>
{
    res.render()
} */

module.exports = notesCtrl;
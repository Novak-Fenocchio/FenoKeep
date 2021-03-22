const notesCtrl = {};

const Note = require('../models/note');

/* new note */
notesCtrl.renderNoteForm = (req, res)=>
{
    res.render('notes/newNote');
};

notesCtrl.createNewNote = async (req, res)=>
{   
    console.log('yesaa');
    const {title, description} = req.body;
    console.log(req.user.id);
    const newNote = new Note({title: title, description: description, user: req.user.id});
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
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title: title, description: description})
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

module.exports = notesCtrl;
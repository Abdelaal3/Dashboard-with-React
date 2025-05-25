import './UserList.css';
import { useEffect, useState, useCallback } from 'react';
import { useToast } from '../Contexts/ToastContext';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

// Material Ui
import { Button, CircularProgress, Paper, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

// Dialogs Components
import AddUserDialog from './dialogs/AddUserDialog';
import EditUserDialog from './dialogs/EditUserDialog';
import DeleteUserDialog from './dialogs/DeleteUserDialog';

const API_URL = 'https://reqres.in/api/users';
const API_KEY = 'reqres-free-v1'; // Store in environment variable!

const initialUser = {
    first_name: '',
    last_name: '',
    email: '',
    avatar: null,
    password: '',
};

export default function UsersList() {
    const { isSignedIn, user } = useUser();
    const { ShowHideSnack } = useToast();
    const [form, setForm] = useState(initialUser);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // Search // 
    const [searchfield, setSearchfield] = useState('')

    // Dialog open states
    const [openAdd, setOpenAdd] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);

    const columns = [
        { field: 'id', headerName: 'ID', width: 90, align: 'center', headerAlign: 'center' },
        {
            field: 'first_name',
            headerName: 'First name',
            width: 200,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <Link to={`/user/${params.row.id}`} style={{ cursor: 'pointer', color: 'black' }}>
                    {'@' + params.row.first_name}
                </Link>
            ),
        },
        { field: 'last_name', headerName: 'Last Name', width: 200, align: 'center', headerAlign: 'center' },
        { field: 'email', headerName: 'Email', width: 200, align: 'center', headerAlign: 'center' },
        {
            field: 'avatar',
            headerName: 'Profile Picture',
            width: 180,
            renderCell: (params) => (
                <img
                    src={params.row.avatar}
                    alt="avatar"
                    style={{ width: 40, height: 40, borderRadius: '50%' }}
                />
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 200,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params) => (
                <div>
                    <Button
                        onClick={() => {
                            setSelectedUser(params.row);
                            setOpenEdit(true);
                        }}
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginRight: 8 }}
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => {
                            setUserToDelete(params.row);
                            setOpenDelete(true);
                        }}
                        variant="contained"
                        color="secondary"
                        size="small"
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: { 'x-api-key': API_KEY },
                });
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                ShowHideSnack('Failed to fetch users.', 'error');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Handlers for form fields in Add Dialog (passed as props)
    const handleFormChange = useCallback((field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    }, []);

    // Handlers of Crud //

    const handleAddUser = async () => {
        try {
            const newUser = {
                first_name: form.first_name,
                last_name: form.last_name,
                password: form.password,
                email: form.email,
                avatar: form.avatar,
            };

            const response = await axios.post(API_URL, newUser, {
                headers: { 'x-api-key': API_KEY },
            });

            setData((prev) => [
                {
                    ...newUser,
                    id: response.data.id || Date.now(),
                },
                ...prev,
            ]);
            ShowHideSnack('The user is created successfully');
            setOpenAdd(false);
            setForm(initialUser);
        } catch (error) {
            console.error('Error creating user:', error.response?.data || error.message);
            ShowHideSnack('Failed to create user.', 'error');
        }
    };

    const handleSaveEdit = async (editedUser) => {
        try {
            await axios.put(`${API_URL}/${editedUser.id}`, editedUser, {
                headers: { 'x-api-key': API_KEY },
            });

            setData((prevData) => prevData.map((u) => (u.id === editedUser.id ? editedUser : u)));
            ShowHideSnack('User updated successfully!');
            setOpenEdit(false);
            setSelectedUser(null);
        } catch (error) {
            console.error('Error updating user:', error);
            ShowHideSnack('Failed to update user.', 'error');
        }
    };

    const handleDeleteUser = async () => {
        try {
            await axios.delete(`${API_URL}/${userToDelete.id}`, {
                headers: { 'x-api-key': API_KEY },
            });

            setData((prev) => prev.filter((u) => u.id !== userToDelete.id));
            ShowHideSnack('User deleted successfully!');
            setOpenDelete(false);
            setUserToDelete(null);
        } catch (error) {
            console.error('Error deleting user:', error);
            ShowHideSnack('Failed to delete user.', 'error');
        }
    };


    const handleSearch = (e) => {

        setSearchfield(e.target.value)

    }

    const filteredData = data.filter(user =>
        user.first_name.toLowerCase().includes(searchfield.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchfield.toLowerCase()) ||
        user.email.toLowerCase().includes(searchfield.toLowerCase())
    );

    // === Handlers of Crud === //


    return (
        <div style={{ width: '95%', margin: '0 auto' }}>
            <Paper
                sx={{
                    height: '100%',
                    width: '100%',
                    marginTop: '30px',
                    boxShadow: '0 3px 2px 0 rgba(0, 0, 0, 0.15), 0 -5px 10px rgba(0, 0, 0, 0.15)',
                }}
            >
                <div className="containerContent">
                    <div id="LeftSecton">
                        <TextField
                            onChange={handleSearch}
                            value={searchfield}
                            id="outlined-search"
                            label="Search field"
                            type="search"
                        />
                    </div>
                    <div id="RightSecton">
                        <Button onClick={() => setOpenAdd(true)} variant="contained">
                            Add
                        </Button>
                    </div>
                </div>

                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                        <CircularProgress />
                    </div>
                ) : (
                    <DataGrid
                        rows={filteredData}
                        columns={columns}
                        initialState={{ pagination: { paginationModel: { pageSize: 10, page: 0 } } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                )}
            </Paper>


            <AddUserDialog
                open={openAdd}
                onClose={() => setOpenAdd(false)}
                form={form}
                onFormChange={handleFormChange}
                onSubmit={handleAddUser}
            />

            <EditUserDialog
                open={openEdit}
                onClose={() => setOpenEdit(false)}
                user={selectedUser}
                setUser={setSelectedUser}
                onSave={handleSaveEdit}
            />

            <DeleteUserDialog
                open={openDelete}
                onClose={() => setOpenDelete(false)}
                user={userToDelete}
                onDelete={handleDeleteUser}
            />
        </div>
    );
}

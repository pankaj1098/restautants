import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

// define yup schema for validation
const schema = yup.object().shape({
  name: yup.string().min(5, "must be at least 5 characters long").required(),
  email: yup.string().email().required(),
  date: yup.date().required(),
  number: yup
    .number()
    .required()
    .positive("it should be positiee")
    .integer("it shoulf be integer")
    .min(5, "min is 5")
    .max(10, "max is 10"),
  select: yup.string().required(),
});

export default function InputForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        maxWidth="50%"
        margin="auto"
        m={2}
        border="1px solid #ccc"
        borderRadius={8}
        padding={2}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            name="date"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="datetime-local"
                label="Date and Time"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.date}
                helperText={errors.date?.message}
              />
            )}
          />

          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                label="Number"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.number}
                helperText={errors.number?.message}
              />
            )}
          />

          <Controller
            name="select"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                label="Select an Option"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.select}
                helperText={errors.select?.message}
              >
                <MenuItem value="">Select an option</MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
                <MenuItem value="option4">Option 4</MenuItem>
                <MenuItem value="option5">Option 5</MenuItem>
              </Select>
            )}
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}

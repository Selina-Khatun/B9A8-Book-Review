import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {
  const [reads, setReads] = useState([]);
  const [noFound, setNoFound] = useState();

  useEffect(() => {
    const readsItems = JSON.parse(localStorage.getItem('reads'));
    if (readsItems) {
      console.log(readsItems);
      setReads(readsItems);
    } else {
      setNoFound("At first you have to read book");
      // console.log('no data');
    }
  }, []);

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const CustomBar = (props) => {
    const { fill, x, y, width, height } = props;

    return (
      <path d={`M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
                ${x + width / 2},${y}C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}Z`}
        fill={fill}
        stroke="none" />
    );
  };

  return (
    <div>
      {noFound ? (
        <h2 className='font-bold text-4xl text-[#FF444A] flex justify-center items-center h-[70vh]'>
        At first you have to read book
        </h2>
      ) : 
      (
        <BarChart
          width={1000}
          height={500}
          data={reads.map(book => ({ name: book.bookName, totalPages: book.totalPages }))}
          margin={{
            top: 20,
            right: 30,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomBar />} label={{ position: 'top' }}>
            {reads.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      )}
    </div>
  );
};

export default PagesToRead;

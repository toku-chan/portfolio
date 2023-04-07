import Image from 'next/image';

export function Personal() {
  return (
    <div>
      <ul>
        <li>中島一徳</li>
        <li>{`Y's`}</li>
        <li>
          <span>SNS</span>
          <ul>
            <li>
              <a href=''>
                <Image
                  src='/sns/twitter.svg'
                  alt='Twitter'
                  width='32'
                  height='32'
                />
              </a>
            </li>
            <li>GitHub</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

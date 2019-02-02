import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <ul>
    <li>
      <Link href='/item'>
        <a>View Item</a>
      </Link>
    </li>
  </ul>
)
